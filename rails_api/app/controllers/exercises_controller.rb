class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :update, :destroy]

  # GET /exercises
  # GET /exercises?user=1
  # GET /exercises?q=legs
  # GET /exercises?user=1&q=legs
  def index
    if params[:q]
      where_params = [
        "name LIKE :q OR category LIKE :q",
        {q: "%#{params[:q]}%"}
      ]
    else
      where_params = ''
    end

    if params[:user]
      @exercises = User.find(params[:user]).exercises.where(where_params)
    else
      @exercises = Exercise.db_exercises.where(where_params)
    end

    render json: @exercises
  end

  # POST /exercises
  def create
    @exercise = exercise.new(exercise_params)

    if @exercise.save
      render json: @exercise, status: :created, location: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercises/1
  def update
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render json: @exercise.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercises/1
  def destroy
    @exercise.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_exercise
    @exercise = exercise.find(params[:id])
  end
  
  # Only allow a list of trusted parameters through.
  def exercise_params
    params.require(:exercise).permit(:user, :q)
  end
end
