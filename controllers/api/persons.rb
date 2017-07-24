require 'sinatra/base'
require 'json'
require 'firebase'

module CalbadOGQ
  module Controllers
    module API
      # API endpoint for Person related requests
      class Persons < Sinatra::Base
        CREATE_PERSON_PATH = '/api/persons'.freeze

        get CREATE_PERSON_PATH do
          base_uri = 'https://calbad-og-queue.firebaseio.com/'
          fb_root = Firebase::Client.new(base_uri)
          persons = fb_root.get('/persons').body.values
          persons.to_json
        end

        put CREATE_PERSON_PATH do
          base_uri = 'https://calbad-og-queue.firebaseio.com/'
          fb_root = Firebase::Client.new(base_uri)
          fb_root.push('/persons', JSON.parse(request.body.read))
        end
      end
    end
  end
end
