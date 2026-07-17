const supabaseUrl = "https://keaojtqfsbotsoywydhf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlYW9qdHFmc2JvdHNveXd5ZGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyNTczNzQsImV4cCI6MjA5OTgzMzM3NH0.MR35dddwK-GwvWPG9s2cgTRLKXhAaJYuwHVxlyS3FCo";

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
