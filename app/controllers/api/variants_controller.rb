class Api::VariantsController < ApplicationController
  def index
    @variants = Variant.all
    render :index
  end
end
