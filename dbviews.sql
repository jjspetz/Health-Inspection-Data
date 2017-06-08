CREATE VIEW most_recent_status_with_buttons AS
SELECT max(health_records.date) AS max,
   health_records.facilityname,
   health_records.concatenatedaddress,
   health_records.inspectionstatus,
   health_records.pass_fail
  FROM health_records
 GROUP BY health_records.facilityname, health_records.date,
 health_records.concatenatedaddress, health_records.inspectionstatus,
 health_records.pass_fail;

CREATE VIEW accurate_records AS
 SELECT max(most_recent_status_with_buttons.max) AS max,
    most_recent_status_with_buttons.facilityname,
    most_recent_status_with_buttons.concatenatedaddress,
    most_recent_status_with_buttons.inspectionstatus,
    most_recent_status_with_buttons.pass_fail
   FROM most_recent_status_with_buttons
  GROUP BY most_recent_status_with_buttons.facilityname,
  most_recent_status_with_buttons.concatenatedaddress,
  most_recent_status_with_buttons.inspectionstatus,
  most_recent_status_with_buttons.pass_fail;

  
