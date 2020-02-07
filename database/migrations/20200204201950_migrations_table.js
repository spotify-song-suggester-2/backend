
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      
      users.increments();
  
      users
        .string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255).notNullable();
      })
      .createTable('Songs', songs => {
        songs.increments();

        songs
          .string('album_cover_url');
          
          songs.string('artist_name')
          .notNullable();
          songs.string('track_id')
          .notNullable()
          .unique();
          songs.integer('track_index_num')
          .notNullable();
          songs.string('track_name')
          .notNullable();
      })
        
    };

    
    

  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
    return knex.schema.dropTableIfExists('songs')
  };
  
