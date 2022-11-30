class SessionsController < ApplicationController
  def create
    @user = User.find_by(name: session_params[:name])
  
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: {errors: ['no such user, please try again']}, status: :unauthorized
    end
  end

  def show
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    logout!
    render json: {logged_in: false}
  end

  private
  def session_params
    params.require(:user).permit(:name, :password)
  end
end
