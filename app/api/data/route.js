export const GET = async (response) => {
  return new Response("text");
};

export const POST = async (response) => {
  return new Response(response.body);
};
