class MembersController < ApplicationController
  
  # GET /workouts/:id/members => all members of workout
  def index
    @workout = Workout.find(params[:workout_id])
    puts '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
    puts @workout
    render json: @workout.users
  end

  # DELETE /workouts/:workout_id/members/:id
  def destroy
    @workout = Workout.find(params[:workout_id])
    @user = User.find(params[:id])
    @workout.user_ids = @workout.user_ids - [@user.id]
    render json: @workout.users, status: :ok
  end

  # POST /workouts/:id/members
  def create
    @workout = Workout.find(params[:workout_id])
    @user = User.find(params[:user_id])
    unless @workout.user_ids.include?(@user.id)
      if @workout.users << @user
        render json: @workout.users, status: :created
      else
        render json: @workout.errors, status: :unprocessable_entity
      end
    else
      render json: @workout.users, status: 	:conflict
    end
  end
end