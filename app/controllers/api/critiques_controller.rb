class Api::CritiquesController < ApplicationController
  def create
    @critique = current_user.critiques.new(critique_params)
    if @critique.save
      render json: @critique
    else
      render json: @critique.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
  end

  def show
  end

  def update
  end

  def destroy
  end

  private
  def critique_params
    params.require(:critique).permit(:telling_id, :body)
  end
end
