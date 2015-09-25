class Api::CritiquesController < ApplicationController
  def create
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
