class UsersController < ApplicationController
  # GET /users
  # GET /workouts?user=1
  def index
    if params[:q]
      where_params = [
        "name LIKE ?",
        "%#{params[:q]}%"
      ]
    else
      where_params = ''
    end

    @users = User.where(where_params)

    if params[:not_in_workout]
      @users = @users - Workout.find(params[:not_in_workout]).users
    end

    render json: @users, only: [:id, :name]
  end

  private
  # Only allow a list of trusted parameters through.
  def workout_params
    params.require(:user).permit(:q, :not_in_workout)
  end
end
