defmodule MemoryWeb.PageController do
  use MemoryWeb, :controller

  def room(conn, %{"name" => name}) do
    render conn, "room.html", name: name
  end

  def index(conn, _params) do
    render conn, "index.html"
  end
end
