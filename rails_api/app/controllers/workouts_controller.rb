class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy, :statistics]

  # GET /workouts         => all workouts
  # GET /workouts?user=1  => all workouts that user 1 is associated with (both owned and shared)
  def index
    if params[:user]
      @workouts = User.find(params[:user]).workouts
    else
      @workouts = Workout.all
    end

    render json: @workouts.as_json(
      :except => [:created_at, :updated_at, :user_id],
      :methods => [:category_counts, :first_gif],
      :include => {:owner => {only: [:id, :name]}}
    )
  end

  # GET /workouts/1
  def show
    render json: @workout.as_json(
      :except => [:created_at, :updated_at, :user_id],
      :methods => [:category_counts, :first_gif],
      :include => [
        {:owner => {only: [:id, :name]}},
        {:workout_exercises => {
          :include => {:exercise => {except: [:created_at, :updated_at]}},
          :except => [:created_at, :updated_at, :workout_id, :exercise_id]
        }}
      ]
    )
  end

  # POST /workouts
  def create
    @workout = Workout.new(workout_params)

    if @workout.save
      render json: @workout, status: :created, location: @workout
    else
      render json: @workout.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /workouts/1
  def update
    if @workout.update(workout_params)
      render json: @workout
    else
      render json: @workout.errors, status: :unprocessable_entity
    end
  end

  # DELETE /workouts/1
  def destroy
    @workout.destroy
  end

  # GET /workout/statistics/1
  def statistics
    @workout = Workout.find(params[:id])
    render json: @workout.statistics
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_workout
    @workout = Workout.find(params[:id])
  end
  
  # Only allow a list of trusted parameters through.
  def workout_params
    params.require(:workout).permit(:user)
  end
end
