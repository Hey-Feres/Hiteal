#admin = User.create!( admin:true, email:"bruno@teste.com", password: '123456' )
#gym = Gym.create!(nome: "Gym Legal", razao_social: "Gym Legal Ltda", cnpj: "123456789", cidade: "Belo Horizonte", estado: "MG", cep: "123456789", numero: "10")
#admin.update(gym_id: gym.id)
#planos = [{nome: "Mensal",valor: "100", periodo: 1},{nome: "Trimestral",valor: "90", periodo: 3},{nome: "Semestral",valor: "80", periodo: 6},{nome: "Anual",valor: "70", periodo: 12}]
#planos.map{ |plano| Plano.create!( gym_id: 1, nome: plano[:nome], valor: plano[:valor], periodo: plano[:periodo]) }
#8.times do |i|
#	User.create!(admin:false,nome: Faker::Name.unique.name,email:"user_#{i}@teste.com",password: '123456',gym_id: 1)
#end
#500.times do |i|
#	Aluno.create!( gym_id: 1, plano_id: rand(1..4), nome: Faker::Name.unique.name, email: "aluno_#{i}@teste.com", senha: "123456", nascimento: DateTime.now - rand(6025..15000).day )
#end
#50.times do |i|
#	fixado = Faker::Boolean.boolean
#	if fixado
#		Aviso.create!( gym_id: 1, nome: Faker::Lorem.word, conteudo: Faker::Lorem.paragraphs(number: 1, supplemental: true), fixado: fixado, views: rand(10..100), intervalo_exibicao: nil )
#	else	
#		Aviso.create!( gym_id: 1, nome: Faker::Lorem.word, conteudo: Faker::Lorem.paragraphs(number: 1, supplemental: true), fixado: fixado, views: rand(10..100), intervalo_exibicao: DateTime.now + rand(10..60).day )
#	end
#end
#def render_cpf
#	a = Array.new
#	11.times do |i|
#		a << rand(0..9)
#	end
#	a.join
#end
#50.times do |i|
#	Funcionario.create!( gym_id: 1, nome: Faker::Name.unique.name, email: "funcionario_#{i}@teste.com", nascimento: DateTime.now - rand(6025..15000).day, sexo: ['feminino','masculino'].shuffle!.last, cpf: render_cpf, remuneracao: rand(900..3000), funcao: ["professor", "secretario", "contador", "nutricionista", "gerente"].shuffle!.last )
#end
#50.times do |i|
#	repete = [true, false].shuffle!.last
#	Aula.create!( 
#		gym_id: 1,
#		nome: "Aula #{i}",
#		descricao: "Aula #{i}",
#		repete: repete,
#		intervalo_repeticao: repete ? 7 : nil,
#		data_inicio: DateTime.now + rand(1..10).day,
#		duracao: 1,
#		professor_id: Funcionario.where(funcao: "professor").shuffle.last.id,
#		horario: Time.now + rand(1..5).hour
#	)
#end
#Aula.all.each do |a|
#	rand(2..10).times do |i|
#		AulaPresenca.create!(aula_id: a.id, aluno_id: Aluno.all.shuffle.last.id)
#		a.update(vagas: a.vagas - 1)
#	end
#end
#exercicios = [
#	{grupo: "Abdominais", nome: "Elevação de Pernas"},
#	{grupo: "Abdominais", nome: "Frontal"},
#	{grupo: "Abdominais", nome: "Bike"},
#	{grupo: "Biceps", nome: "Rosca Inversa"},
#	{grupo: "Biceps", nome: "Rosca Concentrada"},
#	{grupo: "Biceps", nome: "Rosca Martelo"},
#	{grupo: "Biceps", nome: "Rosca Direta"},
#	{grupo: "Biceps", nome: "Rosca Alternada"},
#	{grupo: "Costas", nome: "Remada Unilateral"},
#	{grupo: "Costas", nome: "Puxada na Frente com Triângulo e Polia Alta"},
#	{grupo: "Costas", nome: "Puxada na Frente com Polia Alta"},
#	{grupo: "Costas", nome: "Puxada Alta com Braços Estendidos"},
#	{grupo: "Peito", nome: "Crucifixo (Fly)"},
#	{grupo: "Peito", nome: "Crossover (Pulley Cruzado)"},
#	{grupo: "Peito", nome: "Supino Inclinado"},
#	{grupo: "Peito", nome: "Supino Reto"},
#	{grupo: "Perna", nome: "Glúteos Quatro Apoios e Perna Estendida"},
#	{grupo: "Perna", nome: "Abdução de Quadril"},
#	{grupo: "Perna", nome: "Mesa Flexora"},
#	{grupo: "Perna", nome: "Cadeira Extensora"},
#	{grupo: "Perna", nome: "Gêmeos Sentado"},
#	{grupo: "Perna", nome: "Leg Press Inclinado"},
#	{grupo: "Triceps", nome: "Francês"},
#	{grupo: "Triceps", nome: "Kick Back"},
#	{grupo: "Triceps", nome: "Corda"},
#	{grupo: "Triceps", nome: "Pulley"},
#	{grupo: "Ombros", nome: "Remada Alta"},
#	{grupo: "Ombros", nome: "Desenvolvimento com Halteres"},
#	{grupo: "Ombros", nome: "Elevação Frontal"},
#	{grupo: "Ombros", nome: "Elevação Lateral"}
#]
#exercicios.map{ |exercicio| Exercicio.create!( grupo: exercicio[:grupo], nome: exercicio[:nome]) }
Aluno.all.each do |aluno|
	rand(10..30).times do |i|
		Ficha.create(aluno_id: aluno.id, exercicio_id: Exercicio.all.shuffle.last.id, series: rand(1..5), repeticoes: rand(10..50) )
	end
end



