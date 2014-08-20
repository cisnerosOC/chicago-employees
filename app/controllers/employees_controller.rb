class EmployeesController < ApplicationController
  def index
    @employees = Employee.all.limit(100).to_json
  end
end
