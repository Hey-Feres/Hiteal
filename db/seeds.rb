admin = User.create!(
	admin:true, 
	email:"bruno@teste.com", 
	password: '123456'
)
gym = Gym.create!(nome: "Gym Legal", razao_social: "Gym Legal Ltda", cnpj: "123456789", cidade: "Belo Horizonte", estado: "MG", cep: "123456789", numero: "10")
admin.update(gym_id: gym.id)

Plano.create!(
	gym_id: 1,
	nome: "Mensal",
	valor: 100,
	periodo: 1
)

8.times do |i|
	User.create!(admin:false, nome: "User #{i}", email:"user_#{i}@teste.com",password: '123456',gym_id: 1)
end

1000.times do |i|
	Aluno.create!(
		gym_id: 1,
		plano_id: 1,
		nome: "Aluno #{i}",
		email: "aluno_#{i}@teste.com",
		senha: "123456",
		nascimento: DateTime.now - rand(6025..15000).day
	)
end