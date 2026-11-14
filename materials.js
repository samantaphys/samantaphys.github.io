/**
 * TEACHING MATERIALS LIST
 * ------------------------------------------------------------------
 * This is the only file you edit to add teaching materials.
 *
 * HOW TO ADD A FILE
 *   1. Upload the file to the server, e.g.  teaching/mathphys/notes-01.pdf
 *   2. Copy one line inside "materials: [ ... ]" of the right course,
 *      paste it, and change the title / type / file / date.
 *   3. Upload this materials.js again.  Done.
 *
 * TYPES (each gets its own colour and filter button):
 *   'notes'      Lecture notes
 *   'problems'   Problem sets / assignments
 *   'solutions'  Solutions
 *   'slides'     Slides
 *   'notebook'   Mathematica notebooks (.nb) - visitors get a download
 *   'supplement' Supplementary material (extra PDFs, data, codes)
 *   'video'      Videos / playlists (use a full https:// link in "file")
 *   'other'      Anything else
 *
 * "date" is optional (format YYYY-MM-DD). Newest items appear first.
 * "group" is optional: items with the same group are shown together
 * under that heading (used below for the three NPTEL courses).
 * Put a course's "materials: []" empty and the page shows
 * "Materials will be posted here soon."
 * ------------------------------------------------------------------
 */

var COURSES = [

  {
    id: 'bcc',
    title: 'Bankura Christian College',
    role: 'Tutor',
    place: 'Undergraduate Physics, West Bengal',
    term: 'Feb 2025 – Present',
    current: true,
    about: '',
    // Sub-sections inside this block, one per paper/course (same as NPTEL).
    // List them here in the order you want; a sub-section with no files
    // shows "Materials will be posted here soon."
    // Example:  groups: [ 'Mathematical Physics I', 'Mechanics', 'Electricity and Magnetism' ],
    groups: [
    ],
    materials: [

      // Each line: group = the paper's name (exactly as in "groups" above),
      // type = 'notes' or 'problems' (or 'solutions', 'notebook', 'supplement').
      // Upload the files to teaching/bcc/<paper-folder>/

      // ---- Electromagnetism ----
       // { group: 'Electromagnetism', title: 'Lecture 1: Vector analysis', type: 'notes', file: 'teaching/bcc/mathphys1/lecture-01.pdf', date: '2026-11-14' },
       { group: 'Electromagnetism', title: 'Mocktest-II', type: 'problems', file: 'mocktest_EM.pdf', date: '2026-08-20' },
       // { group: 'Mathematical Physics I', title: 'Solutions to Problem Set 1', type: 'solutions', file: 'teaching/bcc/mathphys1/ps-01-solutions.pdf', date: '2026-11-21' },

      // ---- Mechanics ----
       // { group: 'Mechanics', title: 'Lecture 1: Newtonian mechanics', type: 'notes', file: 'teaching/bcc/mechanics/lecture-01.pdf', date: '2026-11-14' },
        { group: 'Mechanics', title: 'Mocktest-I', type: 'problems', file: 'mocktest_CM.pdf', date: '2026-07-21' },
        { group: 'Mechanics', title: 'Mocktest-I Solutions', type: 'solutions', file: 'mocktest_CM_solutions.pdf', date: '2026-07-28' },
    ]
  },

  {
    id: 'nptel',
    title: 'NPTEL Courses',
    role: 'Tutor',
    place: 'NPTEL',
    term: '2023 – 2026',
    about: '',
    // Order of the sub-sections inside this block
    groups: [
      'Physics Through Computational Thinking (Jan – Mar 2026)',
      'Thermal Physics (Jan – Apr 2025)',
      'Thermal Physics (Jan – Apr 2023)'
    ],
    materials: [

      // ---- Physics Through Computational Thinking (2026) ----
      { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Lecture videos (YouTube playlist)', type: 'video', file: 'https://youtube.com/playlist?list=PL3Pnr6ak_w9DLyxfU4KqLH6EvAldVGYt1&si=0HpPM_2wTcNsJbm9' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 1 notebook', type: 'notebook', file: 'week1.nb', date: '2026-01-27' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 2 notebook', type: 'notebook', file: 'week2.nb', date: '2026-02-03' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 3 notebook', type: 'notebook', file: 'week3.nb', date: '2026-02-10' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 4 notebook', type: 'notebook', file: 'week4.nb', date: '2026-02-17' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 5 notebook', type: 'notebook', file: 'week5.nb', date: '2026-02-24' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 6 notebook', type: 'notebook', file: 'week6.nb', date: '2026-03-03' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 7 notebook', type: 'notebook', file: 'week7.nb', date: '2026-03-10' },
       { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 8 notebook', type: 'notebook', file: 'week8.nb', date: '2026-03-17' },
       // { group: 'Physics Through Computational Thinking (Jan – Mar 2026)', title: 'Week 1 supplement', type: 'supplement', file: 'teaching/nptel/ptct/week01-supplement.pdf', date: '2026-01-10' },

      // ---- Thermal Physics (2025) ----
      { group: 'Thermal Physics (Jan – Apr 2025)', title: 'Lecture videos (YouTube playlist)', type: 'video', file: 'https://youtube.com/playlist?list=PL3Pnr6ak_w9DrJL07yldM3_AOdmDhWLDQ&si=4Yo0eI4tHgPmMnmE' },
      // { group: 'Thermal Physics (Jan – Apr 2025)', title: 'Supplementary notes', type: 'supplement', file: 'teaching/nptel/thermal2025/supplement-01.pdf', date: '2025-02-01' },
      // { group: 'Thermal Physics (Jan – Apr 2025)', title: 'Mathematica notebook', type: 'notebook', file: 'teaching/nptel/thermal2025/notebook-01.nb', date: '2025-02-01' },

      // ---- Thermal Physics (2023) ----
      { group: 'Thermal Physics (Jan – Apr 2023)', title: 'Lecture videos (YouTube playlist)', type: 'video', file: 'https://youtube.com/playlist?list=PL3Pnr6ak_w9CI_XbhUJ6ZftAkw7QAK9lH&feature=shared' },
      // { group: 'Thermal Physics (Jan – Apr 2023)', title: 'Supplementary notes', type: 'supplement', file: 'teaching/nptel/thermal2023/supplement-01.pdf', date: '2023-02-01' },

    ]
  },

];
