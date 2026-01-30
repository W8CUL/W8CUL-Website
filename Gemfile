source "https://rubygems.org"

# Use modern Jekyll (compatible with Ruby 4.0)
gem "jekyll", "~> 4.3"

# Required for Ruby 3.4+
gem "csv"
gem "base64"
gem "bigdecimal"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# webrick is required for Ruby 3.0+ as it was removed from stdlib
gem "webrick"
