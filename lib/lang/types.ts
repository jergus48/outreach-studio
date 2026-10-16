// Small per-language strings that are not part of the big Fixed (deck) or Src (cheat sheet) blocks.
export type Extra = {
  name: string; // the language's own name, e.g. 'Français'
  llm: string; // how the language is named in AI prompts, e.g. 'French (formal "vous" register)'
  where: string; // deck heading "Where it fits"
  ask: string; // deck heading "What do we automate first?"
  meetIntro: (company: string) => string; // first paragraph of the Meet invite email
};
