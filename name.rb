# name.rb
require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

get '/' do
  erb :home
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

post '/contact' do
  # get from address from form
  # to do: verify email is valid
  from = Email.new(email: params[:email])
  to = Email.new(email: 'zhengdavid94@gmail.com')
  subject = params[:subject]
  content = Content.new(type: 'text/plain', value: params[:body])
  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)
  puts response.status_code
  puts response.body
  puts response.headers
  redirect '/contact'
end

get '/faq' do
  erb :faq
end
