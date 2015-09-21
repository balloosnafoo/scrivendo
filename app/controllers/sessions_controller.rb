class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )
    if @user && login!(@user)
      redirect_to root_url
    else
      @user = User.new(user_params)
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
