class SessionsController < ApplicationController
  def create
    @user = User.find_by(name: session_params[:name])
  
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        user: @user.id
      }
    else
      render json: {errors: ['no such user, please try again']}, status: :unauthorized
    end
  end

  def show
    if logged_in? && current_user
      render json: {
        user: current_user.id
      }
    else
      render json: {
        user: nil
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
