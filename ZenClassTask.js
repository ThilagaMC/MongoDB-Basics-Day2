
//Find all the topics and tasks which are thought in the month of October
db.topics.find({ "date": { $gte: "2020-10-01", $lte: "2020-10-31" } });
db.tasks.find({ "date": { $gte: "2020-10-01", $lte: "2020-10-31" } });

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({ "date": { $gte: "2020-10-15", $lte: "2020-10-31" } });

// Find all the company drives and students who are appeared for the placement.
db.company_drives.find({}, { company_name: 1, users_appeared: 1 });

//Find the number of problems solved by the user in codekata
db.codekata.find({ user_id: <USER_ID> }, { "problems_solved": { $size: "$problems_solved" } });

// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ $where: "this.mentees.length > 15" });


//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([
  { $match: { date: { $gte: "2020-10-15", $lte: "2020-10-31" }, status: "absent" }},
  { $lookup: { from: "tasks", localField: "user_id", foreignField: "user_id", as: "tasks" }},
  { $unwind: "$tasks" },
  { $match: { "tasks.submitted": false }},
  { $group: { _id: "$user_id", count: { $sum: 1 }}}
]);