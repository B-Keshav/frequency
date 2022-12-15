class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def hello_wrld
    session[:count] ||= 0
    session[:count] = session[:count].to_i + 1
    render json: {count: session[:count]}
  end

  private

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found(invalid)
    render json: { error: invalid.models}, status: :not_found
  end

end
