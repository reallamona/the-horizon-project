const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_KEY";

const supabase = window.supabase.createClient(
supabaseUrl,
supabaseKey
);

async function loadGlitches() {
const { data, error } = await supabase
.from("glitches")
.select("*");

if (error) {
console.log(error);
return;
}

console.log(data);
}

loadGlitches();
