class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?
  def current_user
    @current_user ||= Session.find_by_session_token(session[:session_token]).user
  end

  def logged_in?
    !!@current_user
  end

  def login!(user)
    session = user.sessions.new
    session[:session_token] = session.session_token
  end

  def logout!(user)
    Session.find_by(user: user).destroy
  end
end
