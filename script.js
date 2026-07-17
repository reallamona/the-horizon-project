const supabaseKey = "sb_publishable_luprTNJfXHrn3epk5QR3Qw_738HJT7S";
const supabase = window.supabase.createClient(
supabaseUrl,
supabaseKey
);

async function loadGlitches() {
const { data, error } = await supabase
.from("Glitches")
.select("*");

if (error) {
console.log(error);
return;
}

console.log(data);
}

loadGlitches();
