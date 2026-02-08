# Aplicativo Ciclo Térmico e Heat Input
Este aplicativo foi desenvolvido como parte do **Trabalho de Graduação (TG) em Mecânica – Processos de Soldagem**, com o objetivo de apoiar a análise térmica aplicada à soldagem por meio de cálculos automatizados e visualização gráfica dos principais parâmetros do processo.

O projeto está diretamente relacionado ao software desktop de Ciclo Térmico, disponível neste repositório:  
🔗 https://github.com/Matheus4ndrade/cTermico  

📄 **Trabalho de Graduação (TG):**  
http://ric-cps.eastus2.cloudapp.azure.com/handle/123456789/33293  

🌐 **Site do projeto / Download:**  
https://drillweld.netlify.app/

---

## Objetivo do Aplicativo
O aplicativo foi projetado para:

- Realizar cálculos térmicos baseados em parâmetros do processo de soldagem  
- Gerar gráficos fundamentais para a avaliação do perfil térmico do material  
- Auxiliar estudantes e profissionais no planejamento e ajuste de processos de soldagem  

---

## Importância para a Soldagem
Nos processos de soldagem, o controle térmico é essencial para garantir a qualidade, integridade e desempenho mecânico das juntas soldadas.

O aplicativo permite:
- Determinar a **distribuição de temperatura** ao longo do material  
- Calcular o **Heat Input (Ht)**, parâmetro fundamental para a previsão da microestrutura final  
- Apoiar a análise de viabilidade do processo considerando propriedades do material e condições operacionais  
---

## Equações Utilizadas

As principais equações implementadas no aplicativo incluem:

### Heat Input (Ht)

![Fórmula de Heat Input](/assets/images/imagesForDoc/heatInput.png)

Onde:
- **I**: Corrente (A)  
- **V**: Tensão (V)  
- **η**: Eficiência  
- **v**: Velocidade de soldagem (mm/min)  

---

### Cálculo da temperatura ao longo da distância (mm)

![Equação de Adams](/assets/images/imagesForDoc/Eadams.png)

Onde:
- **ρ**: Densidade  
- **Cp**: Calor específico  
- **t**: Espessura da chapa  
- **Tm**: Temperatura de fusão  
- **T₀**: Temperatura inicial  

Essas equações permitem prever a distribuição térmica e otimizar os parâmetros de soldagem de forma fundamentada.

---

## Funcionalidades

- Inserção dos parâmetros do processo de soldagem  
- Cálculo automático das grandezas térmicas  
- Geração de gráficos:
  - Temperatura × Distância  
  - Temperatura × Tempo  
- Interface intuitiva e acessível  

---

## Download do APK
O aplicativo pode ser baixado diretamente pelo site do projeto:

🌐 https://drillweld.netlify.app/

Após o download, instale o APK no dispositivo Android.  
Caso necessário, habilite a opção de instalação de fontes desconhecidas nas configurações do sistema.

---

## Contribuições
Sugestões, melhorias e correções são bem-vindas. Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

## Autor
**Matheus Felipe Andrade Gomes**  
Trabalho de Graduação em Mecânica – Processos de Soldagem
