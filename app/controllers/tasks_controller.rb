class TasksController < ApplicationController
	def index
    @tasks = Task.all
	end

	def create
		task = Task.new strong_params

    if task.save
      render json: Task.all
    else
      render json: {
        errors: task.errors.full_messages,
        status: 400
      }
    end
	end

  def update
    task = Task.find params[:id]

    if task.update strong_params
      render json: Task.all
    else
      render json: {
        errors: task.errors.full_messages,
        status: 400
      }
    end
  end

  def destroy
    task = Task.find params[:id]

    if task.delete
      render json: Task.all
    else
      render json: {
        errors: task.errors.full_messages,
        status: 400
      }
    end
  end

  def strong_params
    params.require(:task).permit!
  end
end