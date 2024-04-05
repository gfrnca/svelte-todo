<script>
  import Icon from "@iconify/svelte";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";
</script>

<main class="min-h-screen flex justify-center items-center">
  <div class="relative min-w-[400px] flex items-center">
    <Input />

    <Button class="absolute right-1 p-3  flex items-center justify-center">
      <Icon style="font-size: 24px" icon="fluent:send-32-filled" />
    </Button>
  </div>
</main>
