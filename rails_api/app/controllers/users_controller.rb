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
    
    render json: @users.first(5), only: [:id, :name]
  end

  def create
    @user = User.new(
      name: params[:name], 
      email: params[:email], 
      password: params[:password], 
      password_confirmation: params[:password_confirmation]
    )

    if @user.save
      login!
      render json: {user_id: @user.id, user_name: @user.name}, status: :created, location: nil
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(
      #index params
      :q,
      :not_in_workout,
      #create params
      :name, 
      :email, 
      :password, 
      :password_confirmation
    )
  end
end
