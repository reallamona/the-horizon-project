const supabase = window.supabase.createClient(
supabaseUrl,
supabaseKey
);

async function loadglitches() {
const { data, error } = await supabase
.from("glitches")
.select("*");

if (error) {
console.log(error);
return;
}

console.log(data);
}

loadglitches();
