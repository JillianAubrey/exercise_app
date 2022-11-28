class UsersController < ApplicationController
  # GET /users                          => all users
  # GET /users?not_in_workout=1         => all users not in workout 1
  # GET /users?q=bob                    => all users with name like %bob%
  # GET /users?not_in_workout=1&q=bob   => users not in workout 1 with name lie %bob% 
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
