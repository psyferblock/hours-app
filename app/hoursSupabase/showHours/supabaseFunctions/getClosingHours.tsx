import { supabase } from "@/utils/SupabaseBrowser";

export default async function getClosingHours(
  entityId
)  {
  const { data, error } = await supabase
  .from("closing_hours")
  .select()
  .eq("entity_id", entityId);
if (error) throw error;
// console.log("closingHours:", data);
return data;
  }
