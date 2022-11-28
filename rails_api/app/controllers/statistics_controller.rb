class StatisticsController < ApplicationController
  # GET /statistics/1
  def show
    @workout = Workout.find(params[:id])
    render json: @workout.statistics
  end
end
