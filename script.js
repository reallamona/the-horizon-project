const supabaseKey = "sb_publishable_luprTNJfXHrn3epk5QR3Qw_738HJT7S";
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
