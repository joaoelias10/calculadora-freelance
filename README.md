<div align="center">
  <img src="https://img.shields.io/badge/Tech-Solutions-00f2ff?style=for-the-badge&logo=target&logoColor=black" alt="TechSolutions Logo" height="60">
  
  # ⚡ Simulador de Orçamento Freelance Pro
  
  <p align="center">
    <img src="https://img.shields.io/badge/Status-Finalizado-39ff14?style=flat-square" alt="Status">
    <img src="https://img.shields.io/badge/ADS-3º_Semestre-00f2ff?style=flat-square" alt="Semestre">
    <img src="https://img.shields.io/badge/Unicesumar-Londrina-white?style=flat-square" alt="Local">
  </p>

  <p align="center">
    <strong>Interface Interativa de Alta Performance para Precificação de Serviços de TI</strong>
  </p>
</div>

---

## 🟦 Sobre o Projeto

O **TechSolutions Simulator** é uma aplicação *Client-side* desenvolvida para resolver uma dor real do mercado freelancer: a agilidade na precificação de serviços. O projeto une uma estética **Cyberpunk/Neon** com uma lógica robusta de manipulação de dados em tempo real.

Este projeto faz parte do meu portfólio de **Análise e Desenvolvimento de Sistemas**, demonstrando habilidades em engenharia de front-end e experiência do usuário (UX).

---

## 🛠️ Tecnologias e Métodos

Para garantir um código limpo (Clean Code) e escalável, utilizei as seguintes tecnologias:

### **Front-End & Estilização**
* **HTML5 Semântico:** Uso de tags como `main`, `section`, `article` e `header` para SEO e acessibilidade.
* **CSS3 Advanced:** * **Variáveis CSS (`:root`):** Centralização da paleta neon para fácil manutenção.
    * **Flexbox & Grid:** Layouts bidimensionais para garantir o alinhamento dos cards.
    * **Keyframe Animations:** Símbolo neon rotativo e textos pulsantes feitos 100% em código.
    * **Glassmorphism:** Efeito de transparência e desfoque no formulário de contato.

### **Lógica de Programação (JavaScript ES6+)**
* **Arrow Functions (`() => {}`):** Sintaxe enxuta para funções de atualização de interface.
* **Data Attributes:** Armazenamento de preços diretamente no HTML para desacoplar lógica de dados.
* **Manipulação de DOM:** Escuta de eventos em tempo real (`onclick`) para atualizar o estado do total.
* **Casting de Dados:** Uso de `parseFloat()` para garantir a integridade dos cálculos monetários.
* **Intl.NumberFormat:** Formatação automática para o padrão monetário brasileiro (BRL).

---

## 📱 Responsividade & UX

O projeto foi construído sob o conceito de **Mobile-First**. 
- **Desktop:** Layout em Grid de 3 ou 4 colunas.
- **Tablet:** Transição suave para 2 colunas.
- **Mobile:** Empilhamento vertical com botões otimizados para o toque (Touch-friendly).
- **Acessibilidade:** Alto contraste entre o fundo preto (#0a0a0a) e o texto neon azul (#00f2ff).

---

## 🏗️ Estrutura de Arquivos

```text
📂 calculadora-freelance
├── 📄 index.html      # Estrutura principal e seções do simulador
├── 📄 style.css       # Estilização Neon, animações e responsividade
├── 📄 script.js      # Lógica de cálculo e simulação de Socket
└── 📄 README.md       # Documentação técnica do projeto