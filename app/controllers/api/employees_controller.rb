module Api
  class EmployeesController < ApplicationController
    def index
      render json: @employees = Employee.paginate(per_page: 100, page: params[:page])
    end
  end
end
