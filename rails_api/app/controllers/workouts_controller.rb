class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy, :statistics]
  before_action :set_owner, only: [:create]

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
    @workout = @owner.owned_workouts.new(name: params[:name])

    # Add owner into workout's users
    @workout.users << @owner

    # Add all workout_exercises
    for workout_exercise in params[:workout_exercises] do
      @workout.workout_exercises.new(
        exercise_id:  workout_exercise[:exercise_id],
        duration:     workout_exercise[:duration],
        reps:         workout_exercise[:reps],
        sets:         workout_exercise[:sets],
        note:         workout_exercise[:note]
      )
    end

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

  def set_owner
    @owner = User.find(params[:owner])
  end
  
  # Only allow a list of trusted parameters through.
  def workout_params
    params.require(:workout).permit(
      # index params
      :user, 
      # create/edit params   
      :name,
      :owner,
      {workout_exercises: [
        :exercise_id,
        :duration,
        :reps,
        :sets,
        :note
      ]}
    )
  end
end
