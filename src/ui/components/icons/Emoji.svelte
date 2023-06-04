<script>
  export let label;
  export let symbol;
</script>

<span
  role="img"
  aria-label={label ? label : ""}
  aria-hidden={label ? "false" : "true"}
>
  {symbol}
</span>

<style>
</style>
