json.extract! employee, :id, :name, :department, :title, :created_at, :updated_at
json.url employee_url(employee, format: :json)
