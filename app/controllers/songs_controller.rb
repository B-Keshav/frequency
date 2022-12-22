class SongsController < ApplicationController

    def index
        render json: Song.all, status: :ok 
    end

    def show
        song = Song.find(params[:id])
        render json: song
    end

    def create
        user = User.find_by(id: session[:user_id])
        song = user.songs.create!(song_params)        
        render json: song, status: :created
    end

    private

    def song_params
        params.permit(:title, :synth, :col1, :col2, :col3, :col4, :col5, :col6, :col7, :col8)
    end

end
