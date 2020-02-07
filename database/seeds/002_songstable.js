
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Songs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Songs').insert([
        {
          album_cover_url: 'https://i.scdn.co/image/ab67616d00001e023e8f49afdd73bc8713489ec4',
          artist_name: 'Bingo Play',
          track_id: '5eIyK73BrxHLnly4F9PWqg',
          track_index_num: 6,
          track_name: 'Grandma - Original mix'
        },
        {
          album_cover_url: 'https://i.scdn.co/image/ab67616d00001e027b3452cd5795ff6e6f8593e4',
          artist_name: 'Chris Cooq',
          track_id: '049RxG2laEl9U1PGYeIqLV',
          track_index_num: 9,
          track_name: 'Hazard - Original mix'
        },
        {
          album_cover_url: 'https://i.scdn.co/image/ab67616d00001e028fa6aa6a2ccbe9abd8b9e7a5',
          artist_name: 'Scatox',
          track_id: '7h2qWpMJzIVtiP30E8VDW4',
          track_index_num: 12,
          track_name: 'Rulet - Original mix'
        }
      ]);
    });
};
