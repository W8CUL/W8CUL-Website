# WVU Amateur Radio Club (W8CUL) Website

This is the official Jekyll site for the WVU Amateur Radio Club. Most of the content you’ll edit lives in **data files**—you usually don’t need to touch the HTML or layouts.

---

## Quick local preview

1. Install [Ruby](https://www.ruby-lang.org/en/downloads/) (e.g. 2.7 or newer).
2. Install Bundler: `gem install bundler`
3. From the project folder, run:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
4. Open **http://localhost:4000** in your browser.

---

## Where to edit content: the `_data` folder

All editable data is in the **`_data`** folder. These files control what appears on the site.

### `_data/officers.yml` — Club officers

- One block per officer.
- **`id`** must match the folder name under `officers/` (e.g. `president` → there must be a folder `officers/president/`).
- **`image`** is the filename of the photo in `assets/officers/` (e.g. `president.jpg`).
- You can edit: `name`, `title`, `callsign`, `license_class`, `email`, `phone`, `office`, `major`, `bio`, `order`.
- Use spaces for indentation. Leave a field as `""` if you don’t have info yet.

**Adding a new officer:**  
1. Add an entry in `_data/officers.yml` with a unique `id`.  
2. Create a new folder `officers/your-id/` and inside it create `index.html` with exactly:

   ```yaml
   ---
   layout: officer
   title: Your Title Here
   officer_id: your-id
   ---
   ```

   (Use the same `your-id` as in the YAML.)

### `_data/navigation.yml` — Menu and social links

- **`main`** is the top navigation menu. Each item has `title` and `url`.
- To add a dropdown, add a `children` list under an item with its own `title` and `url`.
- For links that go off the site (e.g. Discord), add `external: true` to that item.
- **`social`** is the list of social links (Discord, Instagram, etc.) with `name`, `url`, and `icon`.

### `_data/projects.yml` — Club projects

- One block per project: `id`, `name`, `years`, `description`, `tags`, `link`, `status`.
- **`link`** is the URL to the project’s page. If that page doesn’t exist yet, the link will 404 until you add it.

### `_data/equipment.yml` — Shack equipment

- **`radios`** — list of items with `name` and `type`.
- **`antennas`** — list of items with `name` and `description` (a list of strings).
- **`repeaters`** — list with `name`, `frequency`, `offset`, `tone`.
- **`test_equipment`** — list with `name`.
- **`retired`** — list with `name` and optional `type`.

Add or remove items using the same structure as the existing entries. Use spaces (not tabs) for indentation.

---

## Editing tips

- **YAML syntax:** Use spaces for indentation. Use a colon and a space for key–value pairs (`title: President`). Use a hyphen and a space for list items (`- name: Something`).
- After editing any `_data` file, run `bundle exec jekyll serve` again and refresh the browser to see changes.
- The README is excluded from the built site, so it won’t appear on the live website.
