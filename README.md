# Rails dynamic forms

Dynamic forms in Rails with [Turbo](https://turbo.hotwired.dev/). Also works without JavaScript.

Relevant files are:

```
app/views/employees/_form.html.erb
app/controllers/employees_controller.rb (lines 27-29 & 43-45)
app/javascript/controllers/dynamic_form_controller.js
```

`git log` hopefully gives the full context.

## Setup and run locally

```
bin/rails db:migrate
bin/rails server
open http://localhost:3000
```
