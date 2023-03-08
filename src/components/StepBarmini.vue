<template>
    <a-steps :current="1" size="small">
        <a-step title="Finished"></a-step>
        <a-step title="In Progress"></a-step>
        <a-step title="Waiting"></a-step>
    </a-steps>
</template>
  
<script>
export default {
    name: "StepBarmini"
}
</script>

<style scoped></style>