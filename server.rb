require 'sinatra/base'
require 'sinatra/json'

class Server < Sinatra::Base
  pid = Process.spawn('./node_modules/.bin/webpack-dev-server')
  Process.detach(pid)
  puts "webpack dev server pid: #{pid}"

  get '/companies.json' do
    companies = []
    1.upto(50) do |i|
      companies << {
        name: "Company #{i}",
        id: i
      }
    end
    json :companies => companies
  end
end
