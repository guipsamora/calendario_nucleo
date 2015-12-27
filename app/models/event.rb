class Event < ActiveRecord::Base
  validates :nome, :pilar, :descricao, :local, presence: true

  def self.pilares
     [['Liderança','Liderança'], ['Redes', 'Redes'], ['Mercado', 'Mercado'], ['Propósito', 'Propósito']]
  end

end
