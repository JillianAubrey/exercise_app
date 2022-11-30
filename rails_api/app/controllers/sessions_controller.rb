class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: session_params[:email])
  
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        user_id:   @user.id,
        user_name: @user.name
      }
    else
      render json: {errors: ['no such user, please try again']}, status: :unauthorized
    end
  end

  def show
    if logged_in? && current_user
      render json: {
        user_id:   current_user.id,
        user_name: current_user.name
      }
    else
      render json: {
        user_id:   nil,
        user_name: nil
      }
    end
  end

  def destroy
    logout!
    render json: {
      user_id:   nil,
      user_name: nil
    }
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
end
