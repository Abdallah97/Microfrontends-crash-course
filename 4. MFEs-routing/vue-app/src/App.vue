<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <p>Welcome to micro frontends crash course</p>
    
    <div class="button-showcase">
      <h3>Button Components:</h3>
      <div class="button-group">
        <Button 
          text="Primary Button" 
          variant="primary" 
          @click="handleClick('Primary')"
        />
        <Button 
          text="Secondary Button" 
          variant="secondary" 
          @click="handleClick('Secondary')"
        />
        <Button 
          text="Success Button" 
          variant="success" 
          @click="handleClick('Success')"
        />
        <Button 
          text="Warning Button" 
          variant="warning" 
          @click="handleClick('Warning')"
        />
        <Button 
          text="Danger Button" 
          variant="danger" 
          @click="handleClick('Danger')"
        />
        <Button 
          text="Disabled Button" 
          variant="primary" 
          :disabled="true"
          @click="handleClick('Disabled')"
        />
      </div>
      
      <div v-if="lastClicked" class="message">
        Last clicked: <strong>{{ lastClicked }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  components: {
    Button
  },
  setup() {
    return { 
      message: "Hello Vue! Welcome",
      lastClicked: null
    };
  },
  data() {
    return {
      lastClicked: null
    };
  },
  methods: {
    handleClick(buttonType) {
      this.lastClicked = buttonType;
      console.log(`${buttonType} button clicked!`);
    }
  }
};
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
}

p {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.button-showcase {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-showcase h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.message {
  text-align: center;
  padding: 10px;
  background: #e3f2fd;
  border-radius: 4px;
  color: #1976d2;
  font-size: 14px;
}
</style>
