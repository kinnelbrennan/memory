defmodule MemoryWeb.RoomChannel do
  use MemoryWeb, :channel

  alias Memory.Game

  def join("room:" <> name, payload, socket) do
    if authorized?(payload) do
      game = Game.new()
      socket = socket
      |> assign(:game, game)
      |> assign(:name, name)
      {:ok, %{"join" => name, "room" => Game.client_view(game)}, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end
  def handle_in("flip", %{"index" => n}, socket) do
    game = Game.flip(socket.assigns[:game], n)
    socket = assign(socket, :game, game)
    {:reply, {:ok, %{"room" => Game.client_view(game)}}, socket}
  end

  defp authorized?(_payload) do
    true
  end

end
