# Aplicativo Ciclo Termico e Heat Input
Este projeto foi desenvolvido como parte do Trabalho de Graduação 
(TG) em Mêcanica: Processos de Soldagem. Ele combina um aplicativo móvel (disponível em formato APK) e um software complementar (veja outro repositório).
   
O objetivo principal é fornecer uma ferramenta prática e acessível para cálculos térmicos e de parâmetros essenciais no processo de soldagem, utilizando equações específicas da área.

O aplicativo foi projetado para:
   * Realizar cálculos baseados em parâmetros como densidade, calor específico, velocidade de soldagem e outras variáveis.

   * Gerar gráficos de temperatura por distância e temperatura por tempo, essenciais para a análise do perfil térmico no material.
   
   * Auxiliar profissionais e estudantes da área de soldagem no planejamento e execução de processos mais eficientes.

## Importância para a Soldagem
Nos processos de soldagem, o controle térmico é crucial para garantir a qualidade e resistência das juntas soldadas. Este aplicativo utiliza equações específicas que permitem:

   * Determinar a distribuição de temperatura ao longo do material
   
   * Calcular o Heat Input (Ht), um parâmetro essencial para prever a microestrutura final da solda.

   * Auxiliar na análise de viabilidade do processo com base nas propriedades do material e condições de operação.

A ferramenta torna mais prática a análise de variáveis que tradicionalmente demandam cálculos complexos, proporcionando uma interface amigável e intuitiva.

## Equações Utilizadas

As equações implementadas no aplicativo incluem:
   
   ### Heat Input (Ht):
   ![Fórmula de Heat Input](/assets/images/imagesForDoc/heatInput.png)

   Onde:
   * I: Corrente (A)
   * 𝑉: Tensão (V)
   * 𝑛: Eficiência
   * 𝑣: Velocidade de soldagem (mm/min)


### Cálculo de temperatura ao longo da distância (mm):
   ![Fórmula de Heat Input](/assets/images/imagesForDoc/Eadams.png)

   Onde:
   * ρ: Densidade
   * 𝐶𝑝: Calor específico
   * 𝑡: Espessura da chapa
   * 𝑇𝑚: Temperatura de fusão
   * 𝑇0: Temperatura inicial

Essas são algumas das equações que são aplicadas para prever a distribuição térmica e otimizar os parâmetros de soldagem.


## Funcionalidades

- Entrada de dados: insira os parâmetros do processo.

- Cálculo automático dos valores necessários.

- Geração de gráficos:
   - Temperatura x Distância
   - Temperatura x Tempo

- Interface intuitiva para usuários de diversos níveis de experiência.

## Como Baixar o APK

O aplicativo está disponível para download no seguinte link: -------

Após o download, instale o arquivo em seu dispositivo Android. Certifique-se de ativar a instalação de fontes desconhecidas nas configurações do dispositivo, se necessário.

## Como Contribuir
Contribuições são bem-vindas! Caso tenha sugestões ou melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

## Autor
Este projeto foi desenvolvido por Matheus Felipe Andrade Gomes como parte do Trabalho de Graduação em Mecânica: Processos de Soldagem.