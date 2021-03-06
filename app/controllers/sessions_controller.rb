class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user && login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid log in credentials"]
      @user = User.new(user_params)
      render :new
    end
  end

  def destroy
    logout!(current_user)
    render json: current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
