class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?
  def current_user
    return @current_user if @current_user
    session[:session_token] && current_session = Session
      .find_by_session_token(session[:session_token])
    @current_user = current_session ? current_session.user : nil
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    new_session = user.sessions.create
    session[:session_token] = new_session.session_token
  end

  def logout!(user)
    Session.find_by(user: user).destroy
  end
end
